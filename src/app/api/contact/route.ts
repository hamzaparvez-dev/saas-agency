import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactFormSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  job_title: z.string().optional(),
  company_name: z.string().min(1, 'Company name is required'),
  help: z.enum([
    "Get a Quote",
    "Schedule Consultation",
    "Learn More",
    "Technical Discussion",
    "Project Estimate",
    "Other",
  ]),
  services: z.enum([
    "Web Application Development",
    "Mobile App Development", 
    "AI Agents & Automation",
    "Backend Development",
    "Cloud Solutions",
    "API Development",
    "MVP Development",
    "Enterprise Websites",
    "End-to-End Development",
    "Custom Software Solutions",
  ]),
  info: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = ContactFormSchema.parse(body);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-response email
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    // Example email content that could be sent
    const emailContent = `
New Contact Form Submission

From: ${validatedData.first_name} ${validatedData.last_name}
Email: ${validatedData.email}
Company: ${validatedData.company_name}
Job Title: ${validatedData.job_title || 'Not provided'}

Service Interest: ${validatedData.services}
How we can help: ${validatedData.help}

Project Details:
${validatedData.info || 'No additional details provided'}

Submitted: ${new Date().toISOString()}
    `;

    // In a real application, you would send this email using a service like:
    // - SendGrid
    // - Mailgun
    // - Amazon SES
    // - Resend
    // - Or your preferred email service
    
    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: 'hello@youragency.com',
    //   from: 'noreply@youragency.com',
    //   subject: `New Contact: ${validatedData.services} - ${validatedData.company_name}`,
    //   text: emailContent,
    //   replyTo: validatedData.email
    // });

    // Send auto-response to the client
    // await emailService.send({
    //   to: validatedData.email,
    //   from: 'hello@youragency.com',
    //   subject: 'Thank you for contacting us!',
    //   html: generateAutoResponseEmail(validatedData),
    // });

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        success: true 
      },
      { status: 200 }
    );
    
    } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Internal server error',
        success: false 
      },
      { status: 500 }
    );
  }
}

// Example auto-response email template
function generateAutoResponseEmail(data: z.infer<typeof ContactFormSchema>) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting us!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${data.first_name}!</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">We've received your project inquiry</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #333; margin-top: 0;">What happens next?</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
          <h3 style="margin-top: 0; color: #667eea;">Your Project Details:</h3>
          <p><strong>Service:</strong> ${data.services}</p>
          <p><strong>Company:</strong> ${data.company_name}</p>
          <p><strong>How we can help:</strong> ${data.help}</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Our Next Steps:</h3>
          <ul style="padding-left: 20px;">
            <li>📋 <strong>Review:</strong> We'll analyze your project requirements within 24 hours</li>
            <li>📞 <strong>Contact:</strong> Our team will reach out to schedule a consultation call</li>
            <li>💡 <strong>Proposal:</strong> We'll provide a detailed project proposal and timeline</li>
            <li>🚀 <strong>Start:</strong> Once approved, we begin bringing your vision to life</li>
          </ul>
        </div>
        
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1976d2;">💡 Urgent Project?</h3>
          <p>Need to discuss your project immediately? Feel free to email us directly at <a href="mailto:hello@youragency.com" style="color: #1976d2;">hello@youragency.com</a> or call us at <strong>(555) 123-4567</strong></p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; margin: 0;">Best regards,<br><strong>The SaaS Development Team</strong></p>
          <p style="color: #999; font-size: 14px; margin-top: 20px;">
            This email was sent in response to your contact form submission.<br>
            If you didn't submit this form, please ignore this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}