import React from 'react';
import Post from './post';
import styled from 'styled-components';

const Container = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Posts: React.FC = () => {
    const posts = [
        {
            title: '5 ways to repurpose content like a professional creator',
            description:
                "Ever wonder how the biggest creators publish so much content on such a consistent schedule? It's not magic, but once you understand how this tactic works, it'll feel like it is.",
            content:
                "You've worked hard to create something you're proud of. After hours of planning, production, and refining, you publish it on the internet.\n" +
                '\n' +
                'Then, after a few celebratory moments, you sit down to start working on the next piece of content.\n' +
                '\n' +
                'For many creators, this endless cycle is taken for granted. Passion projects devolve into hamster wheels because a critical piece is missing from their strategy.\n' +
                '\n' +
                'What is it that top writers, YouTubers, and podcasters do differently that allows them to break the burnout cycle and squeeze the most value out of every single creation they release?\n' +
                '\n' +
                'The answer is content repurposing.\n' +
                '\n' +
                'What is content repurposing?\n' +
                'Repurposing is “the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.” (Source)\n' +
                '\n' +
                'Modern examples of this practice include turning used food jars into storage containers, abandoned warehouses into loft apartments, or recycled plastics into luxury handbags.\n' +
                '\n' +
                'When this is applied to content, creators translate the original value of their content into different formats, thereby reaching more people in new ways.\n' +
                '\n' +
                'If you’ve ever seen an image of a quote with a colorful background on Facebook or Instagram, you’ve seen content repurposing at work. In this simple example, a creator transformed a piece of text into a shareable image.',
            id: 1,
        },
        {
            title: 'How to increase paid-for newsletter subscribers with landing pages (Part 2)',
            description:
                'Your newsletter upgrade landing page can be the difference between a free newsletter subscriber and an increase in ARR for your business.',
            content:
                'To recap part one of this paid-for newsletter landing page series, the journey a user takes to convert into a paying subscriber is usually:\n' +
                '\n' +
                'Email sign up to your free or limited-trial newsletter\n' +
                'You deliver what you say while upselling the premium offering\n' +
                'Them upgrading with a subscription payment\n' +
                'If you missed part one, catch up on what makes a good newsletter sign up page.\n' +
                '\n' +
                'Part two will move on to:\n' +
                '\n' +
                '💳 The newsletter upgrade landing page\n' +
                'Your newsletter upgrade landing page can be the difference between a free newsletter subscriber and an increase in ARR for your business.\n' +
                '\n' +
                'A lot of the components are the same as the sign up landing page except we swap out the sign up form for pricing table, while handpicking the absolute best social proof and time-saving reminders.\n' +
                '\n' +
                'Here are 7 tips to help you create a high-conversion newsletter upgrade landing page:\n' +
                '\n' +
                '1. Remind them of the compounding value\n' +
                "One of the biggest attractions to starting a paid-for newsletter is the compounding value of your efforts over time. Let's remind them how it benefits them too.\n" +
                '\n' +
                '✅ "Access to the complete archive of over 350 issues"',
            id: 24,
        },
        {
            title: 'How to increase your paid-for newsletter subscribers with landing pages (Part 1)',
            description:
                'Turning a reader into a paying customer is no easy feat — but you can increase your chances of getting more subscribers with a strong landing page!\n' +
                '\n' +
                'Rob Hope\n' +
                'Rob Hope\n' +
                'Rob is a South Africa designer, developer and maker with a passion for simple design. He authored the Landing Page Hot Tips book sharing 100 actionable tips to implement into your Landing Pages.\n' +
                '\n' +
                'More posts by Rob Hope.\n' +
                '\n',
            content:
                'In recent times, paid-for newsletters have become serious business, and rightly so.\n' +
                '\n' +
                'Their authors have identified readers who are sitting with oversaturated inboxes and are willing to pay for clear content actually contributing value to their interests.\n' +
                '\n' +
                'However, turning a reader into a paying customer is no easy feat.\n' +
                '\n' +
                'Their journey normally involved 3 steps:\n' +
                '\n' +
                'Email sign up to your free or limited-trial newsletter\n' +
                'You deliver what you say while upselling the premium offering\n' +
                'Them upgrading with a subscription payment\n' +
                'Two of these (1 & 3) involve landing pages.\n' +
                '\n' +
                'In this two-part series, I break down the key ingredients needed in these two landing pages ultimately leading to a new paid-for newsletter subscriber and more ARR (annual recurring revenue) for your business.\n' +
                '\n' +
                'Simply put, the more subscribers you have in your free or trial newsletter, the more chances you have to convince them to upgrade.\n' +
                'It all starts with:\n' +
                '\n' +
                '📬 The newsletter sign up landing page\n' +
                "A good landing page has one objective and in this use-case, it's for the visitor to enter their email and hit subscribe. The marketing nerds call this a conversion.\n" +
                '\n' +
                "After inspecting and reviewing dozens of newsletter landing pages, I've shortlisted these seven tips to help improve your sign up conversions.\n" +
                '\n' +
                '1. Embed the sign up form and position it above the fold\n' +
                'Aligned with our one objective (signing up), when arriving for the first time these next two landing pages make it abundantly clear I must enter my email address and nothing else:',
            id: 3,
        },
        {
            title: 'How to use lead magnets to capture your first subscribers',
            description:
                'Lead magnets are a tried and true method of growing an audience by giving away free value. But why do some work so much better than others?',
            content:
                'Lead magnets are an essential tool in the creator’s toolkit. When used correctly, they can help you build a bigger, more attentive audience faster than you thought possible.\n' +
                '\n' +
                "That's a big claim. So, why are they so effective?\n" +
                '\n' +
                'What is a lead magnet?\n' +
                'A lead magnet is an exchange of value between a creator and a customer. You (the entrepreneur or writer or YouTuber) make something your audience is willing to exchange their contact information for (i.e., an email address).\n' +
                '\n' +
                "Below, you'll discover over twenty different types of lead magnets you can make to drive growth.\n" +
                '\n' +
                "First, it's important to understand that lead magnets go by a few different names:\n" +
                '\n' +
                "Lead magnet – Typically, a downloadable item displayed in multiple areas on one's website.\n" +
                'Gated content – Protected, member-only style content that customers can only access by subscribing.\n' +
                'Content upgrade – A digital good that enhances publicly available content, such as a private video that further explains a blog post.\n' +
                'These terms are often used interchangeably and accomplish the same goal: gather contact information by delivering value.\n' +
                '\n' +
                'Why do lead magnets work?\n' +
                'If you’ve ever downloaded a free ebook or a checklist or gained access to an exclusive report by entering your email, you’ve interacted with a lead magnet.\n' +
                '\n' +
                'Lead magnets take advantage of a few psychological triggers, which makes them such effective marketing tools.\n' +
                '\n' +
                'First, lead magnets are free. Zero-cost items are nearly psychologically irresistible to most people. Second, they offer customers immediate gratification through instant access or delivery. Third, lead magnets can move your audience from the trust to access phase by pairing them with social proof or evidence of your expertise.',
            id: 4,
        },
        {
            title: '5 ways to repurpose content like a professional creator',
            description:
                "Ever wonder how the biggest creators publish so much content on such a consistent schedule? It's not magic, but once you understand how this tactic works, it'll feel like it is.",
            content:
                "You've worked hard to create something you're proud of. After hours of planning, production, and refining, you publish it on the internet.\n" +
                '\n' +
                'Then, after a few celebratory moments, you sit down to start working on the next piece of content.\n' +
                '\n' +
                'For many creators, this endless cycle is taken for granted. Passion projects devolve into hamster wheels because a critical piece is missing from their strategy.\n' +
                '\n' +
                'What is it that top writers, YouTubers, and podcasters do differently that allows them to break the burnout cycle and squeeze the most value out of every single creation they release?\n' +
                '\n' +
                'The answer is content repurposing.\n' +
                '\n' +
                'What is content repurposing?\n' +
                'Repurposing is “the process by which an object with one use value is transformed or redeployed as an object with an alternative use value.” (Source)\n' +
                '\n' +
                'Modern examples of this practice include turning used food jars into storage containers, abandoned warehouses into loft apartments, or recycled plastics into luxury handbags.\n' +
                '\n' +
                'When this is applied to content, creators translate the original value of their content into different formats, thereby reaching more people in new ways.\n' +
                '\n' +
                'If you’ve ever seen an image of a quote with a colorful background on Facebook or Instagram, you’ve seen content repurposing at work. In this simple example, a creator transformed a piece of text into a shareable image.',
            id: 5,
        },
    ];

    return (
        <Container>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} description={post.description} />
            ))}
        </Container>
    );
};

export default Posts;
