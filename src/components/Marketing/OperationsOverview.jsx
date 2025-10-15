"use client";
import React from "react";
import {
    ArrowUpRight,
    ArrowDownRight,
    MapPin,
    Clock,
    CircleCheck,
    Info,
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function OperationsOverview() {
    const brand = "#0094D9";

    const weeklyData = [
        { day: "Mon", completed: 18, scheduled: 27 },
        { day: "Tue", completed: 20, scheduled: 30 },
        { day: "Wed", completed: 25, scheduled: 32 },
        { day: "Thu", completed: 22, scheduled: 28 },
        { day: "Fri", completed: 24, scheduled: 31 },
        { day: "Sat", completed: 19, scheduled: 26 },
        { day: "Sun", completed: 16, scheduled: 21 },
    ];

    return (
        <main className=" px-6 py-8 lg:px-8 lg:py-12 bg-[#F9FBFD]">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-light tracking-tight text-[#0094D9] lg:text-6xl">
                        Operations Overview
                    </h1>
                    <p className="mt-4 text-lg text-black font-light">
                        Real-time insights into your service operations
                    </p>
                </div>

                {/* Top Metrics */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Active Jobs", value: "24", change: "+12%", up: true },
                        { label: "Staff On-Site", value: "18", change: "+5%", up: true },
                        { label: "Completion Rate", value: "94.2%", change: "+2.1%", up: true },
                        { label: "Avg. Response Time", value: "8.4m", change: "-15%", up: false },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#0094D9]/60"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm font-light text-gray-500">{item.label}</p>
                                    <p className="mt-2 text-3xl font-light tracking-tight text-[#1C3B45]">
                                        {item.value}
                                    </p>
                                </div>
                                <div
                                    className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${item.up
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {item.up ? (
                                        <ArrowUpRight className="h-3 w-3" />
                                    ) : (
                                        <ArrowDownRight className="h-3 w-3" />
                                    )}
                                    {item.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Dashboard Grid */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {/* Active Jobs */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-light tracking-tight text-[#1C3B45]">
                                Active Jobs
                            </h2>
                            <button className="text-sm text-gray-500 hover:text-[#0094D9] transition-colors">
                                View all
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Downtown Office Complex",
                                    person: "Sarah Johnson",
                                    time: "Started 45m ago",
                                    progress: 65,
                                    status: "In Progress",
                                },
                                {
                                    title: "Riverside Medical Center",
                                    person: "Michael Chen",
                                    time: "Started 1h 20m ago",
                                    progress: 85,
                                    status: "In Progress",
                                },
                                {
                                    title: "Tech Park Building A",
                                    person: "Emily Rodriguez",
                                    time: "Scheduled for 2:00 PM",
                                    progress: null,
                                    status: "Starting Soon",
                                },
                            ].map((job, i) => (
                                <div
                                    key={i}
                                    className="group rounded-xl border border-gray-200 bg-[#F9FBFD]/60 p-4 transition-all hover:border-[#0094D9]/60"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <h3 className="font-medium text-[#1C3B45]">{job.title}</h3>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{job.person}</p>
                                            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                                                <Clock className="h-3 w-3" /> {job.time}
                                            </div>
                                        </div>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${job.status === "In Progress"
                                                ? "bg-[#0094D9]/10 text-[#0094D9]"
                                                : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            {job.status}
                                        </span>
                                    </div>

                                    {job.progress && (
                                        <div className="mt-4">
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                                                <div
                                                    className="h-full rounded-full bg-[#0094D9] transition-all"
                                                    style={{ width: `${job.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Staff Activity */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-light tracking-tight text-[#1C3B45]">
                                Staff Activity
                            </h2>
                            <button className="text-sm text-gray-500 hover:text-[#0094D9] transition-colors">
                                View all
                            </button>
                        </div>

                        <div className="space-y-3">
                            {[
                                { initials: "SJ", name: "Sarah Johnson", location: "Downtown Office Complex", status: "On-Site", color: "#0094D9" },
                                { initials: "MC", name: "Michael Chen", location: "Riverside Medical Center", status: "On-Site", color: "#00B5FF" },
                                { initials: "ER", name: "Emily Rodriguez", location: "Tech Park Building A", status: "En Route", color: "#F59E0B" },
                                { initials: "DK", name: "David Kim", location: "No active assignment", status: "Available", color: "#9CA3AF" },
                            ].map((staff, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#F9FBFD]/60 p-4 transition-all hover:border-[#0094D9]/60"
                                >
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-white"
                                        style={{ backgroundColor: staff.color }}
                                    >
                                        {staff.initials}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-[#1C3B45]">{staff.name}</h3>
                                        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                                            <MapPin className="h-3 w-3" /> {staff.location}
                                        </div>
                                    </div>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${staff.status === "Available"
                                            ? "bg-gray-200 text-gray-700"
                                            : staff.status === "En Route"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {staff.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Performance + Recent Activity */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {/* Weekly Performance */}
                    <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-light tracking-tight text-[#1C3B45]">
                                    Weekly Performance
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">Job completion trends</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-[#0094D9]"></div>
                                    <span className="text-gray-500">Completed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-[#00B5FF]"></div>
                                    <span className="text-gray-500">Scheduled</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[240px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={weeklyData}>
                                    <defs>
                                        <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={brand} stopOpacity={0.3} />
                                            <stop offset="95%" stopColor={brand} stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="scheduled" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00B5FF" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00B5FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="day" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="completed"
                                        stroke={brand}
                                        fillOpacity={1}
                                        fill="url(#completed)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="scheduled"
                                        stroke="#00B5FF"
                                        fillOpacity={1}
                                        fill="url(#scheduled)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <h2 className="text-xl font-light tracking-tight text-[#1C3B45] mb-6">
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: <Clock className="h-4 w-4" />,
                                    color: "#F59E0B",
                                    title: "Delayed Check-in",
                                    desc: "Tech Park Building A - 15 min delay",
                                    time: "5m ago",
                                },
                                {
                                    icon: <CircleCheck className="h-4 w-4" />,
                                    color: "#16A34A",
                                    title: "Job Completed",
                                    desc: "Harbor View Plaza - Excellent rating",
                                    time: "12m ago",
                                },
                                {
                                    icon: <Info className="h-4 w-4" />,
                                    color: brand,
                                    title: "New Request",
                                    desc: "Urgent cleaning - City Hall",
                                    time: "28m ago",
                                },
                            ].map((activity, i) => (
                                <div
                                    key={i}
                                    className="flex gap-3 rounded-xl border border-gray-200 bg-[#F9FBFD]/60 p-4 transition-all hover:border-[#0094D9]/60"
                                >
                                    <div
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                                        style={{ backgroundColor: activity.color }}
                                    >
                                        {activity.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-[#1C3B45]">
                                            {activity.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500">{activity.desc}</p>
                                        <p className="mt-2 text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}