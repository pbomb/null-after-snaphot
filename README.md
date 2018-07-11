# null-after-snaphot

Reproduce null dom node after matching snapshot with jest-glamor-react

## Steps to reproduce

Run `yarn test` which will run the jest test showing that `container.firstChild` is null after
the snapshot is asserted.

## How to pinpoint jest-glamor-react being the issue

Comment out the line in `jest.config.js` that adds the `jest-glamor-react` snapshot serializer.
Then run the tests again using `yarn test`. The snapshot will fail since we removed the serializer,
so update it by typing the `u` character in the jest watch mode. Once that is done, the test
should be passing now as `container.firstChild` is no longer null after comparing the snapshot.
