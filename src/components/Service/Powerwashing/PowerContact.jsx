import React from 'react'
import { HashLink } from 'react-router-hash-link'

const PowerContact = () => {
    return (
        <div>
            <section id='get' class="py-10 bg-gradient-to-br from-[#0094D9] to-blue-800 text-white">
                <div class="container mx-auto px-4">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-balance">Experience the Difference</h2>
                        <p class="text-xl mb-8 text-blue-50 text-pretty">See your property transform before your eyes — brighter, cleaner, and refreshed. That's the power of PPS.</p>
                        <p class="text-lg mb-12 text-blue-100 text-pretty">Don't let dirt dull your exterior. Contact PPS Group today for your free quote and bring back your building's original brilliance.</p>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <HashLink to="tel:(416) 471-4465">
                            <button
                                data-slot="button"
                                class="inline-flex hover:text-white items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[&gt;svg]:px-4 text-lg px-8 py-6 bg-white text-[#0094D9] hover:bg-[#0094D9]/90"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2 h-5 w-5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Call Now
                            </button>
                            </HashLink>

                            <HashLink to="mailto:info@ppsgroupinc.ca">

                            <button
                                data-slot="button"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 h-5 w-5">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                Email Us
                            </button>
                            </HashLink>
                        </div>

                        <div class="text-sm text-white">Serving the Greater Toronto Area • Licensed &amp; Insured • Free Quotes</div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PowerContact
