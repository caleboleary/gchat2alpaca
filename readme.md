# gchat2alpaca

A Node.js script to transform Google Chat data from Google Takeout into a format suitable for training a Language Learning Model (LLM).

## Usage

1. First, download your data from Google using Google Takeout. You can do this at the following link: [https://takeout.google.com/settings/takeout](https://takeout.google.com/settings/takeout). You'll only need to select Google Chat data.

2. Once you have downloaded and extracted your data, note the path of the directory which contains your Google Chat data. It should look something like: `takeout-YYYYMMDDThhmmssZ-001/Takeout/Google Chat/Groups`.

3. Clone this repository and navigate into its directory in your terminal.

4. Run the script with the following command:

```bash
node gchat2alpaca.js '<directory-path>' '<your-email>'
```

Replace `<directory-path>` with the path of the directory containing your Google Chat data, and `<your-email>` with your Google email.

The script will then generate a JSON file called `output.json` in the same directory. This file will contain the training data in the format:

```json
[
  {
    "instruction": "text of the message from the other user",
    "output": "your reply"
  },
  ...
]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
