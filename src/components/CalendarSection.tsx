const CalendarSection = () => {

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book a strategy session to claim <span className="bg-gradient-primary bg-clip-text text-transparent">500 free leads and exclusive access</span> to our internal GTM playbooks.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            By booking this call, we'll analyze your current situation and uncover the most effective opportunities to scale your sales pipeline while maximizing efficiency and ROI.

            If we're confident we're a good fit and can truly help, you'll receive 500 free leads along with access to some of our internal documents and SOPs, giving you a transparent look into our proven processes.
          </p>

          {/* Cal.com Calendar Embed - Using iframe approach */}
          <div className="mt-8">
            <iframe
              src="https://cal.com/gtm-revenue/30min?embed=true&layout=month_view"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '8px'
              }}
              title="Book a meeting with GTM Revenue"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;