# change-ssh-identityfile

```shell
# Before: 👇🏻
# Host github.com
# HostName github.com
# User git
# IdentityFile /Users/admin/.ssh/other-file
change-ssh-identityfile --host github.com --config ~/.ssh/config --identity ~/.ssh/my-private-identity-file
# After: 👇🏻
# Host github.com
# HostName github.com
# User git
# IdentityFile /Users/admin/.ssh/my-private-identity-file
```

## Test

### from source

```js
node change-ssh-identityfile.js --host github.com --config ~/.ssh/config --identity ~/.ssh/my-private-identity-file
```

### from binary

```shell
# prereq: yarn build
./dist/change-ssh-identityfile-x64 --host github.com --config ~/.ssh/config --identity ~/.ssh/my-private-identity-file
./dist/change-ssh-identityfile-x86 --host github.com --config ~/.ssh/config --identity ~/.ssh/my-private-identity-file
```
