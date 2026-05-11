import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

import Image from 'next/image';

interface Company {
    id: string;
    name: string;
    logo?: string;
    rating: number;
    location: string;
    services: string[];
    type: string;
}

export function CompanyCard({ company }: { company: Company }) {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                    {company.logo ? (
                        <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 160px) 48px, 96px"
                        />
                    ) : (
                        <span>{company.name.charAt(0)}</span>
                    )}
                </div>
                <div>
                    <h3 className="font-main font-bold leading-none">{company.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mt-1">{company.type}</p>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-body text-sm">{company.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-body text-sm">{company.location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1">
                    {company.services.map((s) => (
                        <Badge key={s} variant="secondary" className="font-body text-xs">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}