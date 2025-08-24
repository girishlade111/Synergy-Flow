"use client";

import Dashboard from './dashboard';

export default function ClientDashboard({ children }: { children: React.ReactNode }) {
    return <Dashboard>{children}</Dashboard>;
}
