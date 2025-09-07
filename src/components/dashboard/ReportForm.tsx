import { useState } from "react";
import { Camera, MapPin, Send, Upload, Mic, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasMedia, setHasMedia] = useState(false);
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("EN");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Report Submitted Successfully",
      description: "Your hazard report has been received and is being verified.",
    });
    
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
    setHasMedia(false);
    setLocation("");
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          toast({
            title: "Location Captured",
            description: "Your current location has been added to the report.",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to access your location. Please enter manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="w-5 h-5 text-primary" />
          Report Coastal Hazard
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            <Globe className="w-3 h-3 mr-1" />
            {language}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Real-time Processing
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hazard Type */}
          <div>
            <label className="text-sm font-medium mb-2 block">Hazard Type</label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select hazard type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tsunami">🌊 Tsunami Warning</SelectItem>
                <SelectItem value="flooding">💧 Coastal Flooding</SelectItem>
                <SelectItem value="hurricane">🌀 Hurricane/Storm</SelectItem>
                <SelectItem value="erosion">🏖️ Coastal Erosion</SelectItem>
                <SelectItem value="other">⚠️ Other Emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div>
            <label className="text-sm font-medium mb-2 block">Report Title</label>
            <Input 
              placeholder="Brief description of the hazard" 
              required
              className="transition-all duration-200 focus:shadow-ocean"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium mb-2 block">Detailed Description</label>
            <Textarea 
              placeholder="Provide detailed information about what you're observing..."
              className="min-h-[100px] transition-all duration-200 focus:shadow-ocean"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium mb-2 block">Location</label>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter location or coordinates" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={getCurrentLocation}
                className="flex-shrink-0"
              >
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Severity */}
          <div>
            <label className="text-sm font-medium mb-2 block">Severity Level</label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="How severe is this hazard?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">🟢 Low - Minor concern</SelectItem>
                <SelectItem value="medium">🟡 Medium - Moderate risk</SelectItem>
                <SelectItem value="high">🟠 High - Significant threat</SelectItem>
                <SelectItem value="critical">🔴 Critical - Immediate danger</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Media Upload */}
          <div>
            <label className="text-sm font-medium mb-2 block">Upload Evidence</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="flex flex-col items-center gap-2">
                {hasMedia ? (
                  <>
                    <Camera className="w-8 h-8 text-safe" />
                    <p className="text-sm text-safe font-medium">Media uploaded successfully</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setHasMedia(false)}
                    >
                      Remove
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setHasMedia(true)}
                        className="flex items-center gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        Photo/Video
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setHasMedia(true)}
                        className="flex items-center gap-2"
                      >
                        <Mic className="w-4 h-4" />
                        Audio
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setHasMedia(true)}
                        className="flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        Files
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Upload photos, videos, or audio recordings as evidence
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Offline Note */}
          <div className="bg-muted/50 border border-border rounded-lg p-3">
            <p className="text-xs text-muted-foreground">
              📱 Reports can be submitted offline and will sync when connection is restored.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ocean-gradient hover:opacity-90 shadow-ocean"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting Report...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit Hazard Report
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}