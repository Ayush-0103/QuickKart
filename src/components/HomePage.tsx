import { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  MapPin, 
  Clock, 
  Star,
  Truck,
  MessageCircle,
  Wallet,
  Tag,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-delivery.jpg';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: ShoppingCart, title: 'Groceries', desc: 'Fresh & Daily Needs', color: 'text-green-400' },
    { icon: Zap, title: 'Food', desc: 'Hot & Fresh Meals', color: 'text-orange-400' },
    { icon: Tag, title: 'Medicine', desc: 'Health & Wellness', color: 'text-blue-400' },
    { icon: Star, title: 'Essentials', desc: 'Daily Use Items', color: 'text-purple-400' }
  ];

  const stats = [
    { number: '10', label: 'Minutes Delivery', icon: Clock },
    { number: '1000+', label: 'Happy Students', icon: Star },
    { number: '24/7', label: 'Support Available', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-card/50 backdrop-blur-lg border-b border-border/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">QuickKart</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Track Order</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>

            <div className="flex items-center space-x-2">
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">₹250</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Lightning Fast</span><br />
                  Campus Delivery
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Get groceries, food, medicine & essentials delivered to your hostel in just 10 minutes!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Order Now</span>
                </Button>
                <Button variant="outline" className="btn-ghost">
                  Track My Order
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <stat.icon className="h-6 w-6 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Campus Delivery" 
                className="rounded-3xl shadow-2xl float-animation"
              />
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">📍 On Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">🔍 AI-Powered Search</h2>
            <p className="text-muted-foreground">Find exactly what you need, when you need it</p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for groceries, food, medicine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar pl-12 h-14 text-lg"
            />
            <Button className="absolute right-2 top-2 h-10 px-6 bg-primary hover:bg-primary/90">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📦 Shop by Categories</h2>
            <p className="text-muted-foreground text-lg">Everything you need for hostel life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="category-card group">
                <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Tracker Preview */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚴 Real-time Delivery Tracking</h2>
            <p className="text-muted-foreground text-lg">Track your order from pickup to doorstep</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="card-floating p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Order #QK1234</span>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    On the way
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Order confirmed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Picked up from store</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                    <span className="text-sm font-medium">Delivering to your hostel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Delivered</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span>ETA: 7 minutes</span>
                    <span className="text-primary font-medium">Rahul • 📞 Call</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support & Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">🙋‍♂️ 24/7 Student Support</h2>
                <p className="text-muted-foreground text-lg">
                  Our AI chatbot and student support team are always here to help with your orders, 
                  queries, and campus-specific needs.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Instant chat support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-primary" />
                  <span>Digital wallet & UPI payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Tag className="h-6 w-6 text-primary" />
                  <span>Student discounts & promo codes</span>
                </div>
              </div>
              
              <Button className="btn-hero">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Chat
              </Button>
            </div>
            
            <div className="bg-card-gradient p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">💸 Student Wallet</h3>
                  <div className="text-3xl font-bold text-primary">₹250.00</div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full btn-hero">Add Money</Button>
                  <div className="relative">
                    <Input 
                      placeholder="Enter promo code" 
                      className="pr-20" 
                    />
                    <Button size="sm" className="absolute right-1 top-1 h-8">
                      Apply
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">Available Offers</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-primary/10 p-2 rounded">
                      <span className="font-medium text-primary">STUDENT20</span> - 20% off first order
                    </div>
                    <div className="bg-primary/10 p-2 rounded">
                      <span className="font-medium text-primary">MIDNIGHT</span> - Free delivery after 11 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of students who trust QuickKart for their daily needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              <ShoppingCart className="h-6 w-6 mr-2" />
              Start Shopping
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-8 py-4">
              Become a Delivery Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Truck className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-gradient">QuickKart</span>
              </div>
              <p className="text-muted-foreground">
                Lightning-fast delivery for hostel students. 10 minutes to your door.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-primary transition-colors">Categories</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Track Order</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Support</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Wallet</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">For Partners</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="/vendor-login" className="hover:text-primary transition-colors">Vendor Login</a></div>
                <div><a href="/delivery-partner" className="hover:text-primary transition-colors">Delivery Partner</a></div>
                <div><a href="/admin" className="hover:text-primary transition-colors">Admin Dashboard</a></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>📧 saxenaayush0103@gmail.com</div>
                <div>📞 +91 93155 96499</div>
                <div>📍 Campus Area</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 QuickKart. Built for students, by students. 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;