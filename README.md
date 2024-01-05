# chat-GPT-API-app

![Project Image](./readme-image.jpeg)

## Overview

chat-GPT-API-app is a simple, proof-of-concept terminal application developed as a learning project. It's designed to interact with the Chat GPT API, following a tutorial by WebDevSimplified. This application operates entirely within the terminal, providing a straightforward interface to communicate with Chat GPT.

## Features

- **Chat GPT API Integration**: Interacts with the Chat GPT API, allowing users to send and receive messages directly from the terminal.
- **Terminal-Based Interaction**: Offers a user-friendly terminal interface for inputting and viewing chat responses.
- **Learning Tool**: Serves as an educational resource for understanding API interactions and Node.js basics.

## Setup and Configuration

1. **Clone the Repository**:
   - Clone the repository to your local machine:
     ```bash
     git clone https://github.com/your-username/chat-GPT-API-app.git
     cd chat-GPT-API-app
     ```

2. **Environment File**:
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key
     ```
   - Replace `your_openai_api_key` with your actual OpenAI API key.

3. **Install Node.js and Dependencies**:
   - Ensure Node.js is installed on your machine.
   - Install the necessary dependencies:
     ```bash
     npm install
     ```

## How to Use

1. **Start the App**:
   - In the terminal, run the app using:
     ```bash
     node script.js
     ```

2. **Interact with Chat GPT**:
   - After running the script, you will get a `prompt >` in the terminal.
   - Type your message and hit `Enter` to send it to Chat GPT.
   - The response from Chat GPT will be displayed in the terminal.

This project is a basic implementation meant for educational purposes, demonstrating how to interact with the Chat GPT API using a Node.js application.

Thank you for exploring the chat-GPT-API-app. It's an ideal starting point for anyone looking to learn more about API integration and Node.js development.
