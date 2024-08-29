"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 mb-12">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-grow"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </form>
        </div>
    );
}