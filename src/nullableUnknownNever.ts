// NULLABLE TYPES
const getUser = (input: string) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("FROM DB : All User");
  }
};

getUser("John Doe");

//unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    {
      const discountedPrice = input * 0.9;
      console.log(`Discounted Price: ${discountedPrice}`);
    }
  } else if (typeof input === "string") {
    const price = parseFloat(input);
    if (!isNaN(price)) {
      const discountedPrice = price * 0.9;
      console.log(`Discounted Price: ${discountedPrice}`);
    } else {
      console.log("Invalid price format.");
    }
  }
};

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);
