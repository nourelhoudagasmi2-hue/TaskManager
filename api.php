
<?php

require_once "connexion.php";

header("Content-Type: application/json; charset=UTF-8");

$action = $_GET["action"] ?? "";

// LISTER
if ($action === "lister") {

    $stmt = $pdo->query(
        "SELECT * FROM taches ORDER BY id DESC"
    );

    echo json_encode(
        $stmt->fetchAll(PDO::FETCH_ASSOC)
    );
}

// AJOUTER
elseif ($action === "ajouter") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $titre = trim($data["titre"] ?? "");

    if ($titre !== "") {

        $stmt = $pdo->prepare(
            "INSERT INTO taches (titre) VALUES (?)"
        );

        $stmt->execute([$titre]);

        echo json_encode([
            "message" => "Tâche ajoutée",
            "id" => $pdo->lastInsertId()
        ]);

    } else {
        echo json_encode([
            "erreur" => "Le titre est obligatoire"
        ]);
    }
}

// TERMINER / REPRENDRE
elseif ($action === "terminer") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data["id"] ?? 0;
    $terminee = $data["terminee"] ?? false;

    $stmt = $pdo->prepare(
        "UPDATE taches SET terminee = ? WHERE id = ?"
    );

    $stmt->execute([
        $terminee ? 1 : 0,
        $id
    ]);

    echo json_encode([
        "message" => "État modifié"
    ]);
}

// MODIFIER LE TEXTE
elseif ($action === "modifier") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data["id"] ?? 0;
    $titre = trim($data["titre"] ?? "");

    if ($titre !== "") {

        $stmt = $pdo->prepare(
            "UPDATE taches SET titre = ? WHERE id = ?"
        );

        $stmt->execute([$titre, $id]);

        echo json_encode([
            "message" => "Tâche modifiée"
        ]);

    } else {
        echo json_encode([
            "erreur" => "Le titre est obligatoire"
        ]);
    }
}

// SUPPRIMER
elseif ($action === "supprimer") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data["id"] ?? 0;

    $stmt = $pdo->prepare(
        "DELETE FROM taches WHERE id = ?"
    );

    $stmt->execute([$id]);

    echo json_encode([
        "message" => "Tâche supprimée"
    ]);
}

// ACTION INCONNUE
else {

    echo json_encode([
        "erreur" => "Action inconnue"
    ]);
}
