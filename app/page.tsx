import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ghost, Sparkles, Layout, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-base flex flex-col items-center justify-center p-8 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-accent-primary-dim rounded-full">
          <Ghost className="w-12 h-12 text-accent-primary" />
        </div>
        <h1 className="text-5xl font-bold tracking-tighter text-primary">
          Ghost AI
        </h1>
        <p className="text-text-secondary max-w-[600px] text-lg">
          Collaborative system design workspace powered by AI. 
          Map your architecture in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card className="border-default bg-surface">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-ai" />
              AI Architect
            </CardTitle>
            <CardDescription>
              Generate complex system diagrams from natural language prompts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Describe your system..." className="bg-subtle border-subtle" />
            <Button className="w-full bg-accent-ai hover:bg-accent-ai/90 text-white font-medium">
              Generate Design
            </Button>
          </CardContent>
        </Card>

        <Card className="border-default bg-surface">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-accent-primary" />
              Collaborative Canvas
            </CardTitle>
            <CardDescription>
              Work together in real-time with your team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="nodes" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-subtle">
                <TabsTrigger value="nodes">Nodes</TabsTrigger>
                <TabsTrigger value="edges">Edges</TabsTrigger>
              </TabsList>
              <TabsContent value="nodes" className="text-sm text-text-muted mt-4">
                Drag and drop nodes to build your architecture.
              </TabsContent>
              <TabsContent value="edges" className="text-sm text-text-muted mt-4">
                Connect components with smart routing.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="border-subtle hover:bg-subtle">
          View Docs
        </Button>
        <Button className="bg-accent-primary hover:bg-accent-primary/90 text-bg-base font-bold">
          Get Started <Zap className="ml-2 w-4 h-4 fill-current" />
        </Button>
      </div>
    </main>
  );
}
