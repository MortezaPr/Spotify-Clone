export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      liked_songs: {
        Row: {
          created_at: string;
          song_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          song_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          song_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "liked_songs_song_id_fkey";
            columns: ["song_id"];
            referencedRelation: "songs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "liked_songs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      songs: {
        Row: {
          author: string | null;
          created_at: string;
          id: number;
          image_path: string | null;
          song_path: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          author?: string | null;
          created_at?: string;
          id?: number;
          image_path?: string | null;
          song_path?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          author?: string | null;
          created_at?: string;
          id?: number;
          image_path?: string | null;
          song_path?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "songs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          billing_address: Json | null;
          full_name: string | null;
          id: string;
          payment_method: Json | null;
        };
        Insert: {
          avatar_url?: string | null;
          billing_address?: Json | null;
          full_name?: string | null;
          id: string;
          payment_method?: Json | null;
        };
        Update: {
          avatar_url?: string | null;
          billing_address?: Json | null;
          full_name?: string | null;
          id?: string;
          payment_method?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
