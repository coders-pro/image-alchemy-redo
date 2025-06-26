
import React, { useState } from 'react';
import { Search, Plus, BookOpen, Library, Map, BarChart3, Settings, CreditCard, Filter, Upload, Globe, Database, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Auto');
  const [selectedMode, setSelectedMode] = useState('Lite');

  const sidebarItems = [
    { icon: Plus, label: 'New Query', active: false },
    { icon: BookOpen, label: 'AI Writer', active: false },
    { icon: Library, label: 'Library', active: false },
    { icon: Search, label: 'Search Papers', active: true },
    { icon: Map, label: 'Citation Map', active: false },
    { icon: BarChart3, label: 'Diagram', active: false },
    { icon: Settings, label: 'Mini Tools', active: false },
  ];

  const typeOptions = ['Auto', 'Literature Review'];
  const modeOptions = ['Lite', 'Pro'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 shadow-lg z-10">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AnswerThis
            </span>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                  item.active 
                    ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100/50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.active ? 'text-purple-600' : 'group-hover:text-slate-700'}`} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <div className="text-sm text-slate-600 flex items-center space-x-2">
            <CreditCard className="w-4 h-4" />
            <span>5 credits left</span>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md">
            See Pricing
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                ANSWERTHIS
              </span>
            </h1>
            <p className="text-slate-600 text-lg">AI-powered research assistant for academic discovery</p>
          </div>

          {/* Search Card */}
          <Card className="mb-8 shadow-xl border-0 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Ask any research question... (Type @ to tag a library project or paper saved in your library)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg border-slate-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 rounded-2xl bg-white/50"
                />
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-700">Type:</span>
                  <div className="flex space-x-1">
                    {typeOptions.map((type) => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(type)}
                        className={`rounded-full px-4 ${
                          selectedType === type 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' 
                            : 'border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-700">Mode:</span>
                  <div className="flex space-x-1">
                    {modeOptions.map((mode) => (
                      <Button
                        key={mode}
                        variant={selectedMode === mode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedMode(mode)}
                        className={`rounded-full px-4 ${
                          selectedMode === mode 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                            : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {mode}
                        {mode === 'Pro' && <Star className="w-3 h-3 ml-1" />}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Button variant="outline" size="sm" className="rounded-full border-slate-200 hover:border-purple-300 hover:bg-purple-50">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload PDF
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-slate-200 hover:border-pink-300 hover:bg-pink-50">
                  <Database className="w-4 h-4 mr-2" />
                  Papers
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-slate-200 hover:border-blue-300 hover:bg-blue-50">
                  <Globe className="w-4 h-4 mr-2" />
                  Internet
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-slate-200 hover:border-green-300 hover:bg-green-50">
                  <Library className="w-4 h-4 mr-2" />
                  Library
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-slate-200 hover:border-orange-300 hover:bg-orange-50 ml-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>

              {/* Search Button */}
              <Button className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg rounded-2xl transition-all duration-200 hover:shadow-xl">
                <Search className="w-5 h-5 mr-2" />
                Start Research
              </Button>
            </CardContent>
          </Card>

          {/* Prompt Helper Card */}
          <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Prompt Helper</h3>
                    <p className="text-sm text-slate-600">Click to open Prompt Helper</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-white/50 text-purple-700 hover:bg-white/70">
                  New
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Explore Tools Card */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Explore Tools</h3>
                <p className="text-sm text-slate-600">Discover powerful research tools and features</p>
              </div>
            </CardContent>
          </Card>

          {/* Empty State */}
          <div className="text-center mt-12 py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 text-lg">No queries or chats yet</p>
            <p className="text-slate-400 text-sm mt-2">Start your research journey by asking a question above</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
