## Job List Template + JSONsilo.com
Build your Job List in minutes without setting up a backend server or database. 😎

![Sample](/screenshots/joblist-template-example.gif)

## Setup

1. If you haven't already, you can [sign up](https://jsonsilo.com/user/signup) for a jsonsilo.com account.
2. Once your registration is completed and your email is verified, get ready to dive in!
3. Create your first Silo (it's FREE!). Copy and paste the JSON template below, and click the `Next` button to deploy your amazing static JSON API.
4. Clone this awesome template with the following command:
    ```bash
    git clone https://github.com/JSONSilo/joblist-template
    ```
5. Now, let's make it yours! Rename `.env-temp` to `.env.local.` Set `NEXT_PUBLIC_API_SILO_URL`. 
    You can get this URL after deployment or in Silo Management. It should look something like this: `https://api.jsonsilo.com/public/<UUID>`.

7. Are you feeling the excitement building up? 😄
8. Run the magic command:
    ```bash
    npm run dev
    ```

And voila! Open http://localhost:3000 with your browser to witness the awesomeness. 🎉

## JSON template

```json
[
    {
        "id": 1,
        "type": "full-time",
        "title": "Software Engineer",
        "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/airbnb.svg",
        "remote": false,
        "salary": "$80,000 - $100,000 per year",
        "company": "AirBnB",
        "location": "New York, NY",
        "posted_at": "2023-10-09T10:00:00Z",
        "expires_at": "2023-10-30T23:59:59Z",
        "is_feature": true,
        "description": "We are looking for a talented software engineer to join our team bla",
        "requirements": [
            "Bachelor's degree in Computer Science",
            "Experience with Java and JavaScript",
            "Strong problem-solving skills"
        ],
        "contact_email": "jobs@techco.com"
    },
    {
        "id": 2,
        "type": "full-time",
        "title": "Software Engineer 2",
        "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/apple.svg",
        "remote": true,
        "salary": "$80,000 - $100,000 per year",
        "company": "Apple",
        "location": "New York, NY",
        "posted_at": "2023-10-09T10:00:00Z",
        "expires_at": "2023-10-30T23:59:59Z",
        "is_feature": false,
        "description": "We are looking for a talented software engineer to join our team bla bla",
        "requirements": [
            "Bachelor's degree in Computer Science",
            "Experience with Java and JavaScript",
            "Strong problem-solving skills"
        ],
        "contact_email": "jobs@techco.com"
    },
    {
        "id": 3,
        "type": "full-time",
        "title": "Full Stack",
        "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/apple.svg",
        "remote": true,
        "salary": "$80,000 - $100,000 per year",
        "company": "Twitter",
        "location": "New York, NY",
        "posted_at": "2023-10-09T10:00:00Z",
        "expires_at": "2023-10-30T23:59:59Z",
        "is_feature": false,
        "description": "We are looking for a talented software engineer to join our team bla bla",
        "requirements": [
            "Computer Science",
            "Python",
            "Strong problem-solving skills"
        ],
        "contact_email": "jobs@techco.com"
    },
    ...
    ...
]

