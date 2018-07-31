# react-foreach [![build status](https://travis-ci.org/cheton/react-foreach.svg?branch=master)](https://travis-ci.org/cheton/react-foreach) [![Coverage Status](https://coveralls.io/repos/github/cheton/react-foreach/badge.svg?branch=master)](https://coveralls.io/github/cheton/react-foreach?branch=master)

[![NPM](https://nodei.co/npm/react-foreach.png?downloads=true&stars=true)](https://nodei.co/npm/react-foreach/)

A React component to render each element of collection using function as child component.

## Installation

```
npm install --save react react-foreach
```

## Usage

You can use lodash's uniqueId() to return unique keys for array children.

```js
<ForEach items={[1, 2, 3, 4, 5]}>
{(value, index, array) => (
    <React.Fragment key={_uniqueId()}>
        <ListItem>{value}</ListItem>
    </React.Fragment>
)}
</ForEach>
```

## API

### Properties

Name | Type | Default | Description
:--- | :--- | :------ | :----------
items | array | | A list of items to render.

## License

MIT
