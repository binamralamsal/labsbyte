import { createFileRoute } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          Component Showcase
        </h1>
        <p className="mb-12 text-gray-600">
          A comprehensive collection of UI components demonstrating various
          variants, sizes, and interactive states.
        </p>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Buttons</h2>

          <div className="mb-12">
            <h3 className="mb-6 border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-800">
              Large Buttons
            </h3>

            <div className="mb-8">
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                With Hover Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" hoverAnimation>
                  Large - Default - Hover Animation
                </Button>
                <Button size="lg" variant="outline" hoverAnimation>
                  Large - Outline - Hover Animation
                </Button>
                <Button size="lg" variant="outlineInversed" hoverAnimation>
                  Large - Outline Inversed - Hover Animation
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                Without Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default">
                  Large - Default
                </Button>
                <Button size="lg" variant="outline">
                  Large - Outline
                </Button>
                <Button size="lg" variant="outlineInversed">
                  Large - Outline Inversed
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-800">
              Normal Buttons
            </h3>

            <div className="mb-8">
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                With Hover Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button hoverAnimation>
                  Normal - Default - Hover Animation
                </Button>
                <Button variant="outline" hoverAnimation>
                  Normal - Outline - Hover Animation
                </Button>
                <Button variant="outlineInversed" hoverAnimation>
                  Normal - Outline Inversed - Hover Animation
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                Without Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button>Normal - Default</Button>
                <Button variant="outline">Normal - Outline</Button>
                <Button variant="outlineInversed">
                  Normal - Outline Inversed
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-800">
              Small Buttons
            </h3>

            <div className="mb-8">
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                With Hover Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" hoverAnimation>
                  Small - Default - Hover Animation
                </Button>
                <Button size="sm" variant="outline" hoverAnimation>
                  Small - Outline - Hover Animation
                </Button>
                <Button size="sm" variant="outlineInversed" hoverAnimation>
                  Small - Outline Inversed - Hover Animation
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                Without Animation
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small - Default</Button>
                <Button size="sm" variant="outline">
                  Small - Outline
                </Button>
                <Button size="sm" variant="outlineInversed">
                  Small - Outline Inversed
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 p-8">
            <h3 className="mb-6 border-b-2 border-gray-700 pb-2 text-2xl font-semibold text-white">
              Outline Inversed on Dark Background
            </h3>
            <p className="mb-6 text-gray-300">
              The outline inversed variant is designed for dark backgrounds
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outlineInversed" hoverAnimation>
                Large
              </Button>
              <Button variant="outlineInversed" hoverAnimation>
                Normal
              </Button>
              <Button size="sm" variant="outlineInversed" hoverAnimation>
                Small
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Input</h2>
          <Input />
        </section>
      </div>
    </div>
  );
}
