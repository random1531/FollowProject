// Définition d'un middleware pour vérifier si l'utilisateur a les autorisations nécessaires pour accéder à une route
module.exports = function checkRole(allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user.role;  // Le rôle de l'utilisateur est supposé être dans req.user

        if (allowedRoles.includes(userRole)) {
            next();
        } else {
            return res.status(403).json({ message: "Accès refusé : Vous n'avez pas les autorisations nécessaires." });
        }
    }
}
