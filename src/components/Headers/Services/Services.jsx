import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      name: "Website Development",
      description:
        "We create stunning, responsive, and user-friendly websites tailored to your business needs. From simple landing pages to complex e-commerce platforms, we've got you covered.",
      icon: CodeBracketIcon,
    },
    {
      name: "Web App Development",
      description:
        "Build powerful and scalable web applications that streamline your business processes. Our team specializes in creating custom solutions to meet your unique requirements.",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Cloud Solutions",
      description:
        "Leverage the power of the cloud with our expert solutions. We provide cloud hosting, migration, and management services to ensure your applications run smoothly and securely.",
      icon: CloudIcon,
    },
    {
      name: "Cybersecurity",
      description:
        "Protect your online assets with our comprehensive cybersecurity services. We implement robust measures to safeguard your data and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of internet-related services to help your
            business thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <service.icon
                  className="h-8 w-8 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.name}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
