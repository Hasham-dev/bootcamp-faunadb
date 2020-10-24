var faunadb = require('faunadb'),
    q = faunadb.query;


(async () => {

    var adminClient = new faunadb.Client({ secret: 'fnAD48FvuVACBwLv1N0SkiuM1bWg0wi6yWUZWLe3' });

    try {
        const result = await adminClient.query(
            // q.CreateDatabase({ name: 'tempdb' })
            // q.CreateKey({
            //     database: q.Database('tempdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })


            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'Hello World ..' } },
            //   )



            // q.Map(
            //     [
            //       'My Name is Hasham',
            //       'Reply',
            //       'Deep meanings in a latte',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { detail: q.Var('detail') } },
            //       )
            //     ),
            //   )

            // q.Get(q.Ref(q.Collection('messages'), '280281389866158597'))
            // q.Get(

            //     q.Match(q.Index('detail_by_title'), 'Hello wWrld ..')

            // )

            // q.Update(
            //     q.Ref(q.Collection('messages'), '280281102991491591'),
            //     { data: { detail:"i'm updated value wow!" } },
            //   )

            // q.Replace(
            //     q.Ref(q.Collection('messages'), '280281102991491591'),
            //     { data: { detail:"why i'm replaced!" } },
            //   )

            // q.Delete(
            //     q.Ref(q.Collection('messages'), '280281102991491591')
            //   )
        )
        console.log(result)

    } catch (err) {
        console.log(err)
    }
})();