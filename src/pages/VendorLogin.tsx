import { useState } from 'react';
import { Truck, Mail, Lock, Store, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const VendorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const benefits = [
    { icon: TrendingUp, title: 'Boost Sales', desc: 'Reach 1000+ students instantly' },
    { icon: Users, title: 'Dedicated Support', desc: '24/7 vendor assistance' },
    { icon: Clock, title: 'Fast Payments', desc: 'Daily settlements' }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
              <Truck className="h-10 w-10 text-primary" />
              <span className="text-3xl font-bold text-gradient">QuickKart</span>
            </Link>
            <h1 className="text-3xl font-bold">
              {isLogin ? 'Vendor Login' : 'Join as Vendor'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {isLogin 
                ? 'Access your vendor dashboard' 
                : 'Partner with us to reach students'
              }
            </p>
          </div>

          {/* Login Form */}
          <Card className="card-floating p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                
                {!isLogin && (
                  <>
                    <Input
                      placeholder="Store Name"
                      className="h-12"
                    />
                    <Input
                      placeholder="Phone Number"
                      className="h-12"
                    />
                    <Input
                      placeholder="Store Address"
                      className="h-12"
                    />
                  </>
                )}
              </div>

              <Button className="w-full btn-hero h-12 text-lg">
                <Store className="h-5 w-5 mr-2" />
                {isLogin ? 'Login to Dashboard' : 'Register Store'}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline"
                >
                  {isLogin 
                    ? "Don't have an account? Register here" 
                    : "Already have an account? Login here"
                  }
                </button>
              </div>
            </form>
          </Card>

          <div className="text-center">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Benefits */}
      <div className="hidden lg:flex flex-1 bg-hero items-center justify-center p-8">
        <div className="max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Grow Your Business
            </h2>
            <p className="text-white/80 text-lg">
              Join QuickKart's vendor network and reach thousands of students
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <benefit.icon className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-white">Active Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;