# Demo

## Introductions 15-20 seconds

Name and background prior to Lighthouse Labs:
- Spencer
- Chris
- Kyra 

## Inspiration 30-45 seconds

Tagline:
Clearance is an app designed to provide accurate and up-to-date medication, allergy, and medical history information prior to a subsequent appointment with your allied health professional.

Problem: 
Allied health professionals have you, the patient, complete a full medical history form prior to an initial appointment only. For any subsequent appointments your medical information is updated at the start of your appointment. But what if a medical change will hinder the ability to proceed with treatment? Potentially resulting in rescheduling an appointment, wasting the patients time, and the office losing production income.

Solution: With Clearance, the patient can send their most up-to-date medical history information to any allied health professional prior to their scheduled treatment. 


## Main features 120-150 seconds

Walk-through:
- Add a new medication

- Edit an existing medical condition

- Delete an allergy 

- Add a contact (so we can email pdf)

- generate pdf for download

- email pdf to new contact

Patient: Clearance sounds great! I actually used to use it before I suffered from a stroke resulting in amnesia. The only thing I can remember now is how to login, but my massage therapist needs me to send my updated info before my next appointment. I really need this massage with all the stress from bootcamp.

App: Understandable! Let’s get on that. From our beautiful homepage, all you need to do is enter your login info.
[Login]
As you can see you get redirected to your medications page by default. You can navigate on the side nav bar to access and modify your medication, allergy, medical history and contacts information.

Patient: Perfect, after my stroke I started to take Warfarin which is a blood thinner. Can we add that new medication?

App: Sure, simply click the add new medication button and fill out the fields. We’ve heard from other users that this type of medication can result in bruising following a massage so it’s important to inform your therapist ahead of time.
[Fill out modal fields:
Name: Warfarin
Purpose: Blood thinner
Dosage: 10 mg per day
Contact: Dr. Spencer Tree
Start date: Nov 1, 2022
End date: none]
Now that it’s filled out, hit submit and you’ll see a confirmation pop up. Your medication is added to the list, most recent first so it’s easy to see the most relevant data.

Patient: Looks good to me. Can we take a look at the allergies next?

App: Of course, just click on the allergies button on the left side to navigate there.

Patient: Ok, I did just have eggs the other day and had no issues! We can delete that one.

App: Alright, deleting is simple just select the trash bin icon. You’ll be prompted to confirm your selection, click OK if you’re sure. Then the item will be removed from the list.

Patient: Thanks, now can we change my therapist’s contact email? It should be @gmail.com

App: Easy, just navigate to the contacts page and click the pencil edit icon. You’ll be able to modify any of the fields. Here we’ll just change the email. Once you’re happy with the changes, click the check mark to save.

Patient: That’s great. You mentioned we can send information, can we email my massage therapist now?

App: Let’s go to the generate page to do that. There are options to download the pdf to your computer, or send to someone on your contacts list. Let’s download a copy for your records first. As you can see it lists all your info in one file.

Patient: This looks great, it definitely has all the info my therapist needs.

App: Now let’s send an email to Serenity Massage. (Once it’s sent, you’ll receive a confirmation message)

Patient: Great, that was easy! I also see you have a dark mode toggle, can we try that?

App: We sure do, it’s useful to prevent retinal disorders and other eye issues. 
[Demo dark mode]

Patient: And when I’m done just logout right? And I’m good to go?

App: Absolutely you now have Clearance! Enjoy your massage.

## Tech stack:

- Front End: React, Ant Design
- Back End: Node, Express
- DB: PostgreSQL
- PDF feature: Nodemailer, html-pdf

## Challenges:

- Learning and implementing a new React UI library, Ant Design was a challenge, particularly navigating new documentation.
- Git workflow, particularly when we had multiple PRs up at a time made merging and coordination a challenge at times.

## Future developments 30-60 seconds

- integrate into existing practice management software for each health professional 
- mobile version