'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts, blogCategories } from '@/data/blog-posts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Plumbing Tips & Resources
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Expert advice, maintenance tips, and industry insights from Rockwall's trusted plumbing professionals
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('All')}
              className={cn(
                "transition-all",
                selectedCategory === 'All' && "shadow-md"
              )}
            >
              All Posts
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-all",
                  selectedCategory === category && "shadow-md"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <motion.p
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-text-secondary mb-8 text-center"
            >
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </motion.p>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      {/* Featured Image */}
                      <div className="relative h-48 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 overflow-hidden">
                        <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-brand-primary text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl font-heading group-hover:text-brand-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-base">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-sm text-brand-text-secondary">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                          <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-brand-primary" />
                          </div>
                          <div className="text-sm">
                            <p className="font-semibold text-brand-text-primary">{post.author.name}</p>
                            <p className="text-brand-text-secondary text-xs">{post.author.role}</p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-brand-text-secondary mb-4">
                  No articles found in this category.
                </p>
                <Button onClick={() => setSelectedCategory('All')}>
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need Professional Plumbing Help?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't let plumbing problems disrupt your life. Contact Downright Plumbing for expert service in Rockwall and throughout the DFW area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Schedule Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-brand-primary"
                  asChild
                >
                  <a href="tel:214-802-3042">
                    Call (214) 802-3042
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
