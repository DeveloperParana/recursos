#!/bin/bash

# TODO: replace :token, :user, and :repo
curl -H "Authorization: token :token" \
    -H 'Accept: application/vnd.github.everest-preview+json' \
    "https://api.github.com/repos/DeveloperParana/recursos/dispatches" \
    -d '{ "event_type": "update-tokens", "client_payload": { "tokenFileName": "design-tokens.json", "tokens": "{"devpr":{"surface":{}}}",  "filename": "Design Tokens"  } }'

