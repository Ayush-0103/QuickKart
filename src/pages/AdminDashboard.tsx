import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Truck, 
  TrendingUp, 
  Activity,
  Package,
  Clock,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { 
      title: 'Total Orders', 
      value: '1,247', 
      change: '+12%', 
      icon: ShoppingCart, 
      color: 'text-primary' 
    },
    { 
      title: 'Active Users', 
      value: '856', 
      change: '+8%', 
      icon: Users, 
      color: 'text-secondary' 
    },
    { 
      title: 'Revenue', 
      value: '₹45,230', 
      change: '+15%', 
      icon: TrendingUp, 
      color: 'text-green-400' 
    },
    { 
      title: 'Delivery Partners', 
      value: '23', 
      change: '+3', 
      icon: Truck, 
      color: 'text-blue-400' 
    }
  ];

  const recentOrders = [
    { id: '#QK1234', customer: 'Priya Sharma', items: '3 items', status: 'Delivered', time: '2 min ago' },
    { id: '#QK1235', customer: 'Rahul Kumar', items: '5 items', status: 'On Route', time: '5 min ago' },
    { id: '#QK1236', customer: 'Anjali Singh', items: '2 items', status: 'Preparing', time: '8 min ago' },
    { id: '#QK1237', customer: 'Vikash Yadav', items: '4 items', status: 'Pending', time: '12 min ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'text-green-400 bg-green-400/10';
      case 'On Route': return 'text-blue-400 bg-blue-400/10';
      case 'Preparing': return 'text-yellow-400 bg-yellow-400/10';
      case 'Pending': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

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
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Last updated: 2 minutes ago
              </div>
              <Activity className="h-5 w-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-400 font-medium">{stat.change}</p>
                </div>
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Orders</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold">{order.id}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{order.customer}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{order.items}</div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{order.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Manage Inventory
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  View Vendors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="h-4 w-4 mr-2" />
                  Delivery Partners
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </Card>

            {/* System Alerts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-yellow-400/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Low Stock Alert</p>
                    <p className="text-xs text-muted-foreground">5 items below threshold</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-400/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">All Systems Operational</p>
                    <p className="text-xs text-muted-foreground">99.9% uptime today</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Performance Overview */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Delivery Time</span>
                  <span className="font-semibold text-primary">8.5 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Success Rate</span>
                  <span className="font-semibold text-green-400">97.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Customer Satisfaction</span>
                  <span className="font-semibold text-primary">4.8/5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;