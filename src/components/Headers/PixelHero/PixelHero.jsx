import {
  ArrowRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function PixelHero() {
  const features = [
    {
      name: "Custom Web Development",
      description:
        "We build fully customized websites tailored to your business needs, ensuring a unique and engaging user experience.",
      icon: CodeBracketIcon,
    },
    {
      name: "Mobile-Friendly Design",
      description:
        "Our websites are designed to be fully responsive, providing an optimal experience on all devices.",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Cloud Integration",
      description:
        "We integrate cloud solutions to ensure your website is scalable, secure, and always available.",
      icon: CloudIcon,
    },
    {
      name: "Advanced Security",
      description:
        "We implement robust security measures to protect your website and user data from potential threats.",
      icon: ShieldCheckIcon,
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Acme Corp",
      quote:
        "Pixel transformed our online presence with a stunning website that perfectly reflects our brand. Highly recommend!",
      icon: UserGroupIcon,
    },
    {
      name: "Jane Smith",
      role: "Founder, Startup Co",
      quote:
        "The team at Pixel is incredibly talented. They delivered a web app that exceeded our expectations.",
      icon: SparklesIcon,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 opacity-90"
        aria-hidden="true"
      />

      {/* Decorative Blurred Shapes */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#3B82F6] to-[#1D4ED8] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:py-56 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transform Your Online Presence
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Pixel, we specialize in creating stunning websites and web
            applications that drive results. Let us help you build a digital
            experience that stands out.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/get-started"
              className="flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition duration-300">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <feature.icon
                  className="h-8 w-8 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 bg-gray-800/50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <testimonial.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 text-lg text-gray-300">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let's build something amazing together. Contact us today to get
            started!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300">
              Contact Us
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
