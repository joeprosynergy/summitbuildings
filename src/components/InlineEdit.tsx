import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InlineEditProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  isEditMode: boolean;
  multiline?: boolean;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
}

export function InlineEdit({
  value,
  onSave,
  isEditMode,
  multiline = false,
  className,
  inputClassName,
  placeholder = 'Enter text...',
}: InlineEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Exit editing if edit mode is turned off
  useEffect(() => {
    if (!isEditMode) {
      setIsEditing(false);
      setEditValue(value);
    }
  }, [isEditMode, value]);

  const handleSave = async () => {
    if (editValue === value) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);
    try {
      await onSave(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
      setEditValue(value);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isEditMode) {
    return <span className={className}>{value}</span>;
  }

  if (isEditing) {
    const InputComponent = multiline ? Textarea : Input;
    return (
      <div className="inline-flex items-center gap-2 min-w-0">
        <InputComponent
          ref={inputRef as any}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSaving}
          placeholder={placeholder}
          className={cn(
            'bg-background text-foreground border-secondary min-w-[200px]',
            inputClassName
          )}
          rows={multiline ? 3 : undefined}
        />
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="p-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-50"
          title="Save"
        >
          <Check className="w-4 h-4" />
        </button>
        <button
          onClick={handleCancel}
          disabled={isSaving}
          className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors disabled:opacity-50"
          title="Cancel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 cursor-pointer group hover:bg-secondary/20 px-2 py-1 rounded transition-colors',
        className
      )}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {value}
      <Pencil className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
    </span>
  );
}
