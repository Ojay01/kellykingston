import Link from "next/link";

const LetsTalkPage: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      method: "Email",
      value: "contact@kellykings.design",
      link: "mailto:contact@kellykings.design",
    },
    {
      icon: "📱",
      method: "Phone",
      value: "+237 (673) 909-858",
      link: "tel:+237673909858",
    },
    {
      icon: "💼",
      method: "LinkedIn",
      value: "OJONG KELLY-KINGSTON",
      link: "https://www.linkedin.com/in/ojong-kelly-kingston-12569522b",
    },
    {
      icon: "🐦",
      method: "X",
      value: "@OjKellyKingston",
      link: "https://x.com/OjKellyKingston",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Let&apos;s Talk
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
          <p className="text-gray-300 mb-8 text-center">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Link href={method.link} key={index} className="group">
                <div className="bg-gray-700 rounded-lg p-6 hover:bg-purple-600 transition-colors duration-300">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {method.method}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white">
                    {method.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkPage;
