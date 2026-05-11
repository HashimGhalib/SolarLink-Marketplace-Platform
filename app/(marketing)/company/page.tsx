"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { CompanyCard } from "@/components/listings/CompanyCard";
import { CompanyCardSkeleton } from "@/components/listings/Skeleton";
import companiesData from "@/data/companies.json";

export default function SolarCompanyListing() {
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState<any[]>([]);
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("rating");

    useEffect(() => {
        // Simulate async data fetching
        const timer = setTimeout(() => {
            setCompanies(companiesData);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const filteredCompanies = companies
        .filter(c =>
            c.name.toLowerCase().includes(filter.toLowerCase()) ||
            c.location.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => b[sortBy] - a[sortBy]);

    return (
        <section className="container mx-auto max-w-8xl pt-36 pb-24 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-main font-bold mb-4 sm:text-5xl lg:text-6xl tracking-tight leading-tight">Solar Companies</h1>
                <p className="text-gray-600 font-body">Find the best solar companies for your needs.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8 items-start">
                <div className="flex-1 space-y-2">
                    <label className="text-sm font-body font-medium">Search</label>
                    <Input
                        placeholder="Search by name or location..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-48 space-y-2">
                    <label className="text-sm font-body font-medium">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                            <SelectValue className="font-body" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="rating">Highest Rating</SelectItem>
                            {/* You could add more sort logic here if needed */}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array(6).fill(0).map((_, i) => <CompanyCardSkeleton key={i} />)
                ) : filteredCompanies.length > 0 ? (
                    filteredCompanies.map(company => (
                        <CompanyCard key={company.id} company={company} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-muted-foreground py-12">
                        No solar providers found matching your criteria.
                    </p>
                )}
            </div>

        </section>
    );
}