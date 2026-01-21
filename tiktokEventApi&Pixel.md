. Generate access token
An access token gives you access to Events API. Each time you make a call, you're required to use your access token.
After a token is generated, make sure to copy it. For security, TikTok won't save the token.
Generate access token
Please copy and save this token somewhere safe. It won't be stored by Tiktok.
f4095f0ccd88fe92eafefc37e9e0fc58aabd16e3
Copy
2. Send events through the API
Now that you have a token, choose events you want to send from your server. We recommend choosing at least 3 events. You'll also need to make a request and set up your payload.
Make a POST request
To send new events, make a POST request to this API's endpoint from this path:/open_api/v1.3/event/track/
When you post to this edge, TikTok creates new server events.
3. Build a payload
View how your payload should be structured. You can also use Payload Helper to check if there's any issues by creating a sample payload for your events.

Go to Payload Helper
Set up Search event
Measure when a visitor searches. View payload
Event parameters	value, currency, content_id, content_type, content_name, search_string, event_id, event_time, url
Customer information parameters	email, phone, external_id, ip, user_agent, ttclid, ttp
Set up ClickButton event
Measure when a visitor taps a button. TikTok recommends tracking website buttons important to your business such as social media buttons. View payload
Event parameters	value, currency, content_id, content_type, content_name, event_id, event_time, url
Customer information parameters	email, phone, external_id, ip, user_agent, ttclid, ttp
Set up Download event
Measure when a visitor tries to download something from your website. View payload
Event parameters	value, currency, content_id, content_type, content_name, event_id, event_time, url
Customer information parameters	email, phone, external_id, ip, user_agent, ttclid, ttp
Set up ViewContent event
Measure when a visitor views a specific page. TikTok recommends tracking pages important to your business such as product comparison, announcement, or release pages. View payload
Event parameters	value, currency, content_id, content_type, content_name, event_id, event_time, url
Customer information parameters	email, phone, external_id, ip, user_agent, ttclid, ttp
Set up FindLocation event
Measure intent when someone tries to find your location View payload
Event parameters	content_id, content_type, content_name, content_category, num_items, search_string, event_id, event_time, url, brand
Customer information parameters	email, phone, external_id, ip, user_agent, ttclid, ttp



add this to .env backend 

event api key: f4095f0ccd88fe92eafefc37e9e0fc58aabd16e3