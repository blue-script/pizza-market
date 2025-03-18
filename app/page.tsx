import {Container, Filters, Title, TopBar} from "@/components/shared"
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return <>
        <Container className={"mt-10"}>
            <Title text={"Все пиццы"} size={"lg"} className={"font-extrabold"}/>
        </Container>

        <TopBar/>

        <Container className="mt-10 pb-14">
            <div className={"flex gap-[80px]"}>
                {/* filtration */}
                <div className={"w-[250px]"}>
                    <Filters/>
                </div>

                <div className={"flex-1"}>
                    <div className={"flex flex-col gap-16"}>
                        <ProductsGroupList
                            title={"Пиццы"}
                            categoryId={1}
                            items={[
                                {
                                    id: 1,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                            ]}
                        />


                        <ProductsGroupList
                            title={"Комбо"}
                            categoryId={2}
                            items={[
                                {
                                    id: 1,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0194079d9dcf71e8bc8fe958a0cc5f99.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                            ]}
                        />
                    </div>
                </div>

            </div>
        </Container>
    </>
}
