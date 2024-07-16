import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GoogleMaps from "./GoogleMaps";

export function ContactComponent() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Contact Us
              </h2>
              <form className="space-y-4">
                <div className="w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <button className="btn btn-secondary" type="submit">
                  Send email
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Call Us
                </h2>
                <p className="text-gray-500 dark:text-gray-400 flex items-center">
                  For immediate assistance, please call us at{"  "}
                  <span href="tel:+541147220988">
                    <a
                      className="hover:underline flex items-center gap-2"
                      href="tel:+541147220988"
                    >
                      +54 11 4722-0988
                    </a>
                  </span>
                  .
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Our Location
                </h2>
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
