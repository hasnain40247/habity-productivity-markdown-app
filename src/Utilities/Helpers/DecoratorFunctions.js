export const getLength = (token) => {
    if (typeof token === "string") {
      return token.length;
    } else if (typeof token.content === "string") {
      return token.content.length;
    } else {
      return token.content.reduce((l, t) => l + getLength(t), 0);
    }
  };
export const getHeadingLevel = (token) => {
    console.log(token.content[0].content.length);
    switch (token.content[0].content.length) {
      case 1: {
        return 24
        break;
      }
      case 2: {
        return 22
        break;
      }
      case 3: {
        return 20
        break;
      }
      case 4: {
        return 18
        break;
      }
      case 5: {
        return 16
        break;
      }
      case 6: {
        return 16
        break;
      }
      default: {
        return 16
      }
    }
  };