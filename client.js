
const options = {
    // TODO: add more options here manav and anushka
	authProvider,
};

const client = Client.init(options);

let messages = await client.api('/me/messages')
	.get();