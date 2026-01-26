# Documents

Methods:

- <code title="get /v1/documents">client.documents.<a href="./src/resources/documents.ts">list</a>() -> void</code>
- <code title="delete /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">deleteDocument</a>(id) -> void</code>
- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">ingestFile</a>() -> void</code>
- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">ingestRawText</a>() -> void</code>
- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">ingestURL</a>() -> void</code>
- <code title="patch /v1/documents/{id}">client.documents.<a href="./src/resources/documents.ts">updateDocument</a>(id) -> void</code>

# Search

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">query</a>() -> void</code>

# Folders

Methods:

- <code title="post /v1/folders">client.folders.<a href="./src/resources/folders.ts">createFolder</a>() -> void</code>
- <code title="delete /v1/folders/{id}">client.folders.<a href="./src/resources/folders.ts">deleteFolder</a>(id) -> void</code>
- <code title="get /v1/folders/{id}/documents">client.folders.<a href="./src/resources/folders.ts">listDocuments</a>(id) -> void</code>
- <code title="get /v1/folders">client.folders.<a href="./src/resources/folders.ts">listFolders</a>() -> void</code>
- <code title="get /v1/folders/{id}">client.folders.<a href="./src/resources/folders.ts">retrieveFolder</a>(id) -> void</code>
- <code title="patch /v1/folders/{id}">client.folders.<a href="./src/resources/folders.ts">updateFolder</a>(id) -> void</code>
