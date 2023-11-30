## Issue board extensions
The extensions provide a list of valid values, such as statuses, types, and user emails.

Since Catenda also holds on additional information for these values, the BCF-API standard, for updating these values, is not sufficient.
These resources are therefore added to Catenda BCF-API, but are not a part of the official BCF-API standard.

Statuses and types, that do not have this information, is considered unlinked. They cannot be used in new topics.
Unlinked statuses and types occurs if you import a BCF-file that contains topics that have statuses or types that are not a part of the issue board extension.

Unlinked users occurs if you import a BCF-file, that references users that are not found in the project.
