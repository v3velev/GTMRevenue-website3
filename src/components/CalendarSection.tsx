const CalendarSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book a call to get for <span className="bg-gradient-primary bg-clip-text text-transparent">FREE</span> our "XYZ document"
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            our doc xyz, we provide it to you, book this if you are X, only serious
          </p>

          {/* Calendar Placeholder */}
          <div className="bg-gradient-card rounded-3xl p-12 border border-border shadow-premium">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex flex-col items-center justify-center border border-border">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Calendly embedded
              </div>
              <p className="text-muted-foreground">
                Calendar booking interface will be placed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;