import { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Star, 
  Banknote, 
  Navigation,
  Phone,
  Package,
  CheckCircle,
  User,
  Mail,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const DeliveryPartner = () => {
  const [isRegistration, setIsRegistration] = useState(true);

  const benefits = [
    { icon: Banknote, title: 'Earn ₹15,000+/month', desc: 'Flexible working hours' },
    { icon: Clock, title: 'Work Anytime', desc: 'Choose your own schedule' },
    { icon: MapPin, title: 'Campus Area', desc: 'Deliver within college only' },
    { icon: Star, title: 'Rating Bonus', desc: 'Extra income for 5-star ratings' }
  ];

  const stats = [
    { label: 'Average Earnings', value: '₹800/day', icon: Banknote },
    { label: 'Deliveries/Day', value: '25-30', icon: Package },
    { label: 'Avg Rating', value: '4.8/5', icon: Star },
    { label: 'Response Time', value: '<2 min', icon: Clock }
  ];

  if (isRegistration) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Truck className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-gradient">QuickKart</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Become a Delivery Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our delivery team and earn while studying. Flexible hours, campus-only deliveries, 
              and great pay for students!
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 card-hover">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <Card className="p-8 card-floating">
              <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="First Name" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Last Name" className="pl-10 h-12" />
                  </div>
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="email" placeholder="Email Address" className="pl-10 h-12" />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Phone Number" className="pl-10 h-12" />
                </div>
                
                <Input placeholder="College Name" className="h-12" />
                <Input placeholder="Hostel/Address" className="h-12" />
                <Input placeholder="Student ID Number" className="h-12" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Vehicle Type (Bike/Cycle)" className="h-12" />
                  <Input placeholder="Vehicle Number" className="h-12" />
                </div>

                <Button className="w-full btn-hero h-12 text-lg">
                  <Truck className="h-5 w-5 mr-2" />
                  Apply as Delivery Partner
                </Button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsRegistration(false)}
                    className="text-primary hover:underline"
                  >
                    Already registered? Login to your panel
                  </button>
                </div>
              </form>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Join QuickKart?</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold mb-4">📋 Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Must be a college student</li>
                  <li>• Own vehicle (bike/bicycle)</li>
                  <li>• Valid student ID</li>
                  <li>• Smartphone with GPS</li>
                  <li>• Available for minimum 3 hours/day</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Delivery Partner Dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Truck className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-gradient">QuickKart</span>
              </Link>
              <span className="text-muted-foreground">|</span>
              <h1 className="text-xl font-semibold">Delivery Panel</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Online</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsRegistration(true)}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <Banknote className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">₹650</div>
            <div className="text-sm text-muted-foreground">Today's Earnings</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Package className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm text-muted-foreground">Deliveries Done</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">7.2</div>
            <div className="text-sm text-muted-foreground">Avg Time (min)</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Order */}
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-xl font-bold mb-6">Current Delivery</h2>
            
            <div className="bg-primary/5 p-6 rounded-2xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Order #QK1240</span>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  In Progress
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Pickup: Campus Store</div>
                    <div className="text-sm text-muted-foreground">3 items • ₹245</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-medium">Deliver to: Hostel Block-C, Room 204</div>
                    <div className="text-sm text-muted-foreground">Priya Sharma • 📞 +91 98765 43210</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button className="flex-1 btn-hero">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Customer
                </Button>
                <Button variant="outline" className="bg-green-400/10 border-green-400 text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Delivered
                </Button>
              </div>
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Earnings */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">💰 Earnings Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Today</span>
                  <span className="font-semibold text-primary">₹650</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Week</span>
                  <span className="font-semibold">₹4,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Month</span>
                  <span className="font-semibold">₹15,800</span>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                <CreditCard className="h-4 w-4 mr-2" />
                Withdraw Earnings
              </Button>
            </Card>

            {/* Performance */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">📊 Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Delivery Success Rate</span>
                    <span>98.5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '98.5%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Rating</span>
                    <span>4.9/5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Go Online/Offline
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  View Delivery History
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Update Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;