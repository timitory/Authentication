<template>
    <footer id="footer" class="footer bg-gray-900 text-white py-12">
    <!-- Footer Top -->
    <div class="footer-top">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="single-footer">
                        <h2 class="text-xl font-bold mb-4 text-left">About Us</h2>
                        <p class="mb-4 text-left">Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                        <!-- Social -->
                        <ul class="social flex space-x-4">
                            <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fab', 'facebook-f']" /></RouterLink></li>
                            <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></RouterLink></li>
                            <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fab', 'twitter']" /></RouterLink></li>
                            <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fab', 'vimeo-v']" /></RouterLink></li>
                            <li><RouterLink to="/" class="text-white"><font-awesome-icon :icon="['fab', 'pinterest-p']" /></RouterLink></li>
                        </ul>
                        <!-- End Social -->
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="single-footer f-link">
                        <h2 class="text-xl font-bold mb-4 text-left">Quick Links</h2>
                        <div class="flex flex-wrap">
                            <div class="w-1/2">
                                <ul class="space-y-2 text-left">
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Home</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />About Us</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Services</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Our Cases</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Other Links</RouterLink></li>
                                </ul>
                            </div>
                            <div class="w-1/2">

                                <ul class="space-y-2 text-left">
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Consuling</RouterLink></li>
                                    <li><RouterLink to="/"  class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Finance</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Testimonials</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />>FAQ</RouterLink></li>
                                    <li><RouterLink to="/" class="text-gray-400 hover:text-white"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />Contact Us</RouterLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="single-footer">
                        <h2 class="text-xl font-bold mb-4 text-left">Open Hours</h2>
                        <p class="mb-4 text-left">Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                        <ul class="time-sidual space-y-2">
                            <li class="day flex justify-between"><span>Monday - Friday</span><span>8.00-20.00</span></li>
                            <li class="day flex justify-between"><span>Saturday</span><span>9.00-18.30</span></li>
                            <li class="day flex justify-between"><span>Monday - Thursday</span><span>9.00-15.00</span></li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="single-footer">
                        <h2 class="text-xl font-bold mb-4 text-left">Newsletter</h2>
                        <p class="mb-4 text-left">Subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                        <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner flex">
                            <input name="email" placeholder="Email Address" class="common-input p-2 w-full border border-gray-300 rounded-l-md focus:outline-none" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required type="email">
                            <button class="button bg-blue-500 text-white p-2 rounded-r-md"><font-awesome-icon :icon="['fas', 'paper-plane']" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ End Footer Top -->
    <!-- Copyright -->
    <div class="copyright bg-gray-800 py-4">
        <div class="container mx-auto px-4">
            <div class="text-center">
                <p>© Copyright 2018 | All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank" class="text-blue-400 hover:text-blue-600">timitechIND.com</a></p>
            </div>
        </div>
    </div>
    <!--/ End Copyright -->
</footer>

</template>