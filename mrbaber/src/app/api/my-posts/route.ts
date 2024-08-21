import { NextResponse } from "next/server";
import { fakerPT_BR as faker } from '@faker-js/faker';

export function GET(){
  const data = [...new Array(3)].map((_, i) => ({
    id: faker.string.uuid(),
    image: faker.image.urlLoremFlickr({ category: 'nature' }),
    title: faker.lorem.words(),
    text: faker.lorem.sentences({ min: 1, max: 3 }),
    category: faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' }),
  }))

  return NextResponse.json(data)
}
