# git internals

## ressources

[Entrer dans les entrailles de Git, ou comment faire un commit sans faire du Git (Alexandre Garnier) : Devoxx fr 2016](https://www.youtube.com/watch?v=Hd_UpJPDlik&index=88&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)

> [[4:48](https://youtu.be/Hd_UpJPDlik?list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO&t=290)]les fichiers objects (de `.git/objects/`) sont compressés avec zlib.

[The anatomy of a Git commit : Christoph Burgdorf - 20141118](https://blog.thoughtram.io/git/2014/11/18/the-anatomy-of-a-git-commit.html)

## objects files

[Types of git objects](https://matthew-brett.github.io/curious-git/git_object_types.html)

[Reading git objects](https://matthew-brett.github.io/curious-git/reading_git_objects.html)

written in `.git/objects/`

4 types of objects files :

- commit (the commit description)
- tree (directory state)
- blob (content files state)
- annotated tag


**lire les fichiers objects**

La commande `git cat-file <object-hash> -p` permet d'afficher le contenu d'un fichier object.

Ex commit : 

```bash
$ git cat-file 87a68b76ea470d7ad0f6ecbc5b46eda45e628e43 -p
tree 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00
author Robert DUCHMOUL <robert.duchmoul@domain.tld> 1524570143 +0200
committer Robert DUCHMOUL <robert.duchmoul@domain.tld> 1524570143 +0200

test
```

Ex tree :

```bash
$ git cat-file 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00 -p
100644 blob 274c0052dd5408f8ae2bc8440029ff67d79bc5c3    number.txt
```

Ex blob :

```bash
$ git cat-file 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 -p
1234
```

La même commande en remplaçant `-p` par `-t` pour avoir le type de l'object.

```bash
$ git cat-file 87a68b76ea470d7ad0f6ecbc5b46eda45e628e43 -t
commit

$ git cat-file 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00 -t
tree

$ git cat-file 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 -t
blob
```

**lire le fichier index**

```bash
$ git ls-files --stage
100644 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 0       number.txt
```

[What does the git index contain EXACTLY?](https://stackoverflow.com/questions/4084921/what-does-the-git-index-contain-exactly?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)


