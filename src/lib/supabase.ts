export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Category: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      product: {
        Row: {
          category: number | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          name: string | null
          price: number | null
        }
        Insert: {
          category?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          price?: number | null
        }
        Update: {
          category?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          price?: number | null
        }
      }
      reviews: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          product: number | null
          rating: number | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          product?: number | null
          rating?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          product?: number | null
          rating?: number | null
          user?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
