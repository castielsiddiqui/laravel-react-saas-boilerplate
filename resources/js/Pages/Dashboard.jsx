import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ThemeToggle from '@/Components/ThemeToggle';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const stats = [
        { name: 'Total Users', value: '1,248', change: '+12.5%', positive: true },
        { name: 'Active Sessions', value: '342', change: '+5.2%', positive: true },
        { name: 'System Status', value: 'Optimal', change: '99.9%', positive: true },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard
                    </h2>
                    <ThemeToggle />
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* Welcome Card */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 text-gray-900 dark:text-gray-100">
                        <h3 className="text-lg font-bold">Welcome back, {auth.user.name}! 👋</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Your Laravel 11 + React SaaS boilerplate is configured and ready for production logic.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
                                <div className="mt-2 flex items-baseline justify-between">
                                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{item.value}</p>
                                    <span className={`text-sm font-semibold ${item.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600'}`}>
                                        {item.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pro Upgrade Callout Component (In-App Conversion Banner) */}
                    <div className="border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h4 className="text-base font-semibold text-indigo-900 dark:text-indigo-200">
                                Need Stripe Billing, Teams, & Admin Controls?
                            </h4>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                                Upgrade to the Pro version to get pre-configured subscription webhooks, multi-tenancy, and full user management out of the box.
                            </p>
                        </div>
                        <a
                            href="https://yourusername.gumroad.com/l/your-product"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition text-sm"
                        >
                            Get Pro Version ($59)
                        </a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
