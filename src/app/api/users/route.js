// src/app/api/users/route.js

const users = []; // Esto simula una base de datos en memoria

export async function GET(request) {
    // Devuelve todos los usuarios
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    // Recibe un nuevo usuario y lo guarda
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
        return new Response(JSON.stringify({ error: 'Name and email are required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const newUser = { id: Date.now(), name, email };
    users.push(newUser);

    return new Response(JSON.stringify({ message: 'User created', user: newUser }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request) {
    // Elimina todos los usuarios (para simplificar)
    users.length = 0; // Vacía el array
    return new Response(JSON.stringify({ message: 'All users deleted' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
