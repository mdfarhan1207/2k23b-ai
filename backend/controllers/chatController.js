import {
    generateResponse,
    generateStreamingResponse,
} from "../services/geminiService.js";

export async function chat(req, res) {
    try {
        const { message } = req.body;

        // Validate the request
        if (!message || message.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Message is required.",
            });
        }

        // Get AI response
        const reply = await generateResponse(message);

        // Send response back to the frontend
        return res.status(200).json({
            success: true,
            reply,
        });

    } catch (error) {
        console.error("Chat Controller Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}


export async function streamChat(req, res) {
    try {
        const { message } = req.body;

        if (!message || message.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Message is required.",
            });
        }

        // Tell the browser this is an SSE stream
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        res.flushHeaders?.();

        const stream = await generateStreamingResponse(message);

        let clientDisconnected = false;

        req.on("close", () => {
            clientDisconnected = true;
            console.log("🔌 Client disconnected");
        });


        const keepAlive = setInterval(() => {
            res.write(": ping\n\n");
        }, 15000);
        for await (const chunk of stream) {

            if (clientDisconnected) {
                break;
            }

            const text = chunk.text;

            if (text) {
                res.write(
                    `data: ${JSON.stringify({ text })}\n\n`
                );
            }
        }

        // Tell the frontend we're done
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);

        clearInterval(keepAlive);
        res.end();


    } catch (error) {
        console.error("Streaming Error:", error);

        if (!res.headersSent) {
            return res.status(500).json({
                success: false,
                message: "Streaming failed",
            });
        }

        res.write(
            `data: ${JSON.stringify({
                error: "Streaming failed",
            })}\n\n`
        );

        clearInterval(keepAlive);
        res.end();
    }
}