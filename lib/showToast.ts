'use client';
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

export function showToast(
  title: string,
  description: string,
  variant?: 'default' | 'destructive' | null | undefined
) {
  return toast({
    title,
    description,
    variant,
  });
}
